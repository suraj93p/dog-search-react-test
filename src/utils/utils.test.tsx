import { debounce } from "./utils";

describe("Utils tests", () => {
  describe("Debounce tests", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    test("debounce", () => {
      const func = jest.fn();
      const debouncedFunc = debounce(func, 1000);

      // Call it immediately
      debouncedFunc();
      expect(func).toHaveBeenCalledTimes(0); // func not called

      // Call it several times with 500ms between each call
      for (let i = 0; i < 10; i++) {
        debouncedFunc();
      }
      expect(func).toHaveBeenCalledTimes(0); // func not called

      jest.runAllTimers();
      expect(func).toHaveBeenCalledTimes(1); // func called
    });
  });
});
