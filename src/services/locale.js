"use server";

import { defaultLocale } from "@/i18n/config";
import { cookies } from "next/headers";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
