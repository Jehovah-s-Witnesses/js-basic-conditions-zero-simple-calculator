# js-basic-conditions-zero-simple-calculator

## Acceptance Criteria for Simple JavaScript Calculator

### Requirements:
1. **Operations**:
  - The calculator must support the following five operations:
    - Multiplication (`*`)
    - Division (`/`)
    - Addition (`+`)
    - Subtraction (`-`)
    - Exponentiation (`**`)

2. **User Input**:
  - The user should be asked to:
    1. Enter the first number.
    2. Select the operation (from the five listed).
    3. Enter the second number.

3. **Result Calculation**:
  - Based on the selected operation, the result must be calculated and displayed using `alert`.

4. **Rounding Option**:
  - After each operation, ask the user if they would like to round the result (Yes/No).
    - If the user selects **Yes**, prompt for the desired decimal accuracy (number of decimal places).
    - Display the rounded result using `alert`.

5. **Termination**:
  - After displaying the (rounded) result, the program ends.

### Additional Notes:
- Only use `alert`, `prompt`, and basic conditionals (e.g., `if`, `else if`, `else`) in the implementation.

## Criteria:

- Resolve all errors in the file
- Ensure the code is properly formatted using ESLint (our [pipeline](https://github.com/rammfall-code/guidelines/blob/main/DICTIONARY.md#pipeline-a-pipeline-is-a-sequence-of-automated-steps-that-run-code-checks-it-is-triggered-in-github-after-code-is-pushed-the-pipeline-can-have-three-statuses-pending-checks-are-in-progress-failed-checks-did-not-pass-due-to-issues-like-incorrect-code-errors-or-failed-tests-and-passed-all-checks-were-successful) checks for this).
- The code must comply with the project [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md).
- Pass validation without any errors in [validator](https://validator.w3.org/nu/)
- Additionally, follow all [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md) to avoid issues.
