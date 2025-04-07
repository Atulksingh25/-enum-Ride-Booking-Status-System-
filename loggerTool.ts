// Step 1: Define function signatures (overloads)
function logMessage(message: string): void;
function logMessage(error: Error): void;
function logMessage(code: number, message: string): void;

// Step 2: Function implementation
function logMessage(param1: string | Error | number, param2?: string): void {
  if (typeof param1 === "string") {
    console.log(`[INFO]: ${param1}`);
  } else if (param1 instanceof Error) {
    console.error(`[ERROR]: ${param1.name} - ${param1.message}`);
  } else if (typeof param1 === "number" && typeof param2 === "string") {
    console.warn(`[WARN ${param1}]: ${param2}`);
  }
}

// Step 3: Usage Examples
logMessage("App started successfully");               // string - info
logMessage(new Error("Something went wrong!"));       // Error - error
logMessage(404, "Page not found");                    // number + string - warning
