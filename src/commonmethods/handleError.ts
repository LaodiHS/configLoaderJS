export function handleError(error: unknown): void {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      // Additional handling for specific error types
      if (error instanceof TypeError) {
        console.error('Type error occurred');
      } else if (error instanceof RangeError) {
        console.error('Range error occurred');
      }
      // Add more specific error types and handling as needed
    } else {
      console.error(`Error: ${JSON.stringify(error, null, 2)}`);
    }
  }