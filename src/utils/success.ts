export function deleted(modelName: string) {
  return { statusCode: 200, message: `Delete ${modelName} successfully` };
}
