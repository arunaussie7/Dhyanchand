export function readFormString(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function readFormSelect(form: FormData, key: string): string {
  return readFormString(form, key);
}
