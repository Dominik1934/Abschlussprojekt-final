"use server"

export const fetchProducts = async () => {
    const response = await fetch('')

    const data = await response.json();

    console.log(data);

    return data;
}