export default <T>(url: string): Promise<T> =>
  fetch(`${import.meta.env.PUBLIC_STRAPI_URL}${url}`).then(
    (response) => response.json() as Promise<T>
  );
