import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import LoadingComponent from "../../components/loading/loading.component";
import { Breed, BreedApiResponse, TableHeadCell } from "../../utils/interfaces";
import {
    debounce,
    getAllBreedsOfDogs,
    getDogsBySearch
} from "../../utils/utils";
import { DEBOUNCE_DELAY, DOG_IMAGE_BASE } from "../../config/config";
import { Image, PageWrapper, SearchWrapper, TableWrapper } from "./style";

const HomePage = () => {
    const [userSearch, setUserSearch] = useState<string>("");
    const [pageSize, setPageSize] = useState<number>(10);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [orderByField, setOrderByField] = useState<string>("name");
    const [orderByDir, setOrderByDir] = useState<"asc" | "desc">("asc");
    const [listOfBreeds, setListOfBreeds] = useState<BreedApiResponse[]>([]);

    const debouncedDogSearchByBreed = React.useRef(
        debounce(async (userSearch: string) => {
            try {
                const dogsBySearchRS = await getDogsBySearch(
                    userSearch,
                    pageSize,
                    pageNumber,
                    orderByField,
                    orderByDir
                );
                const dogsBySearch: BreedApiResponse[] = await dogsBySearchRS.json();
                setListOfBreeds(dogsBySearch || []);
            } catch (e) {
                setListOfBreeds([]);
            }
        }, DEBOUNCE_DELAY)
    ).current;

    const getAllBreeds = async () => {
        try {
            const allBreedsOfDogsRS = await getAllBreedsOfDogs(
                pageSize,
                pageNumber,
                orderByField,
                orderByDir
            );
            const allBreedsOfDogs = await allBreedsOfDogsRS.json();
            setListOfBreeds(allBreedsOfDogs || []);
        } catch (e) {
            setListOfBreeds([]);
        }
    };

    const getRowData = (breed: BreedApiResponse): Breed => {
        return {
            id: breed.id,
            name: breed.name ?? "Not Available",
            breed_group: breed.breed_group ?? "Not Available",
            bred_for: breed.bred_for ?? "Not Available",
            weight: breed.weight?.metric ?? "",
            height: breed.height?.metric ?? "",
            life_span: breed.life_span ?? "Not Available",
            temperament: breed.temperament ?? "Not Available",
            image: DOG_IMAGE_BASE + breed.reference_image_id + ".jpg" ?? ""
        } as Breed;
    };

    useEffect(() => {
        console.log("useefeect all params");
        getAllBreeds();
    }, [pageSize, pageNumber, orderByField, orderByDir]);

    useEffect(() => {
        if (userSearch.length >= 3) {
            debouncedDogSearchByBreed(userSearch);
            setListOfBreeds([]);
        } else if (userSearch.length === 0) {
            console.log("useefeect usersearch");
            getAllBreeds();
            setListOfBreeds([]);
        }
    }, [userSearch]);

    const headCells: readonly TableHeadCell[] = [
        {
            id: "name",
            numeric: false,
            disablePadding: true,
            label: "Name",
            sortable: true
        },
        {
            id: "breed_group",
            numeric: false,
            disablePadding: false,
            label: "Breed Group",
            sortable: false
        },
        {
            id: "bred_for",
            numeric: false,
            disablePadding: false,
            label: "Bred For",
            sortable: false
        },
        {
            id: "weight",
            numeric: false,
            disablePadding: false,
            label: "Weight (in kg)",
            sortable: false
        },
        {
            id: "height",
            numeric: false,
            disablePadding: false,
            label: "Height (in m)",
            sortable: true
        },
        {
            id: "life_span",
            numeric: false,
            disablePadding: false,
            label: "Life Span (in years)",
            sortable: true
        },
        {
            id: "temperament",
            numeric: false,
            disablePadding: false,
            label: "Temperament",
            sortable: false
        },
        {
            id: "image",
            numeric: false,
            disablePadding: true,
            label: "Image",
            sortable: false
        }
    ];

    const onUserSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setUserSearch(value);
    };

    const handleChangePage = (e: unknown, page: number) => {
        setPageNumber(page);
        setListOfBreeds([]);
    };

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPageSize(parseInt(e.target.value, 10));
        setListOfBreeds([]);
    };

    const handleSort = (
        event: React.MouseEvent<unknown>,
        fieldName: string
    ) => {
        if (orderByField === fieldName) {
            if (orderByDir === "asc") {
                setOrderByDir("desc");
            } else {
                setOrderByDir("asc");
            }
        } else {
            setOrderByDir("asc");
            setOrderByField(fieldName);
        }
        setListOfBreeds([]);
    };

    const createSortHandler = (property: string) => (
        event: React.MouseEvent<unknown>
    ) => {
        handleSort(event, property);
    };

    return (
        <PageWrapper>
            <SearchWrapper>
                <TextField
                    label="Search Dogs Here"
                    value={userSearch}
                    onChange={onUserSearchChange}
                    variant="outlined"
                />
            </SearchWrapper>
            <TableWrapper>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={1000}
                    rowsPerPage={pageSize}
                    page={pageNumber}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <TableContainer component={Paper} style={{ maxHeight: 495 }}>
                    <Table
                        stickyHeader
                        sx={{ minWidth: 650 }}
                        aria-label="Dog Table"
                        size={"small"}
                    >
                        <colgroup>
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                            <col width="10%" />
                        </colgroup>
                        <TableHead className="table-head">
                            <TableRow style={{ height: "35px" }}>
                                {headCells.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.numeric ? "right" : "left"}
                                        padding={headCell.disablePadding ? "none" : "normal"}
                                        sortDirection={
                                            orderByField === headCell.id
                                                ? orderByDir
                                                : false
                                        }
                                    >
                                        <TableSortLabel
                                            active={orderByField === headCell.id}
                                            direction={
                                                orderByField === headCell.id
                                                    ? orderByDir
                                                    : "asc"
                                            }
                                            onClick={createSortHandler(headCell.id)}
                                        >
                                            {headCell.label}
                                            {orderByField === headCell.id ? (
                                                <Box component="span" sx={visuallyHidden}>
                                                    {orderByDir === "desc"
                                                        ? "sorted descending"
                                                        : "sorted ascending"}
                                                </Box>
                                            ) : null}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {listOfBreeds.length > 0 &&
                                listOfBreeds
                                    .map((breed: BreedApiResponse) => getRowData(breed))
                                    .map((breed) => (
                                        <TableRow
                                            key={breed.id}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            style={{ backgroundColor: "#f5f5f5" }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {breed.name}
                                            </TableCell>
                                            <TableCell>{breed.breed_group}</TableCell>
                                            <TableCell>{breed.bred_for}</TableCell>
                                            <TableCell>{breed.weight}</TableCell>
                                            <TableCell>{breed.height}</TableCell>
                                            <TableCell>{breed.life_span}</TableCell>
                                            <TableCell>{breed.temperament}</TableCell>
                                            <TableCell>
                                                <Image src={breed.image} alt={breed.name} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            {listOfBreeds.length === 0 && <LoadingComponent />}
                        </TableBody>
                    </Table>
                </TableContainer>
            </TableWrapper>
        </PageWrapper>
    );
};

export default HomePage;
