export async function apiFetcher<T>(url: string, options?: RequestInit): Promise<T> {
  
  const res = await fetch(url, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const errorMessage = (await res.json().catch(() => null))?.message || "API request failed";
    throw new Error(errorMessage);
  }

  return res.json();
}

