// scripts.js
const cars = [
    { name: "Ferrari", price: 180000, img: "https://imgs.search.brave.com/E65r4MPDuGulDlpURPwWcSNFLYY_EJqvGNrVYHfsC14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDA2NzA2/LzIyMDUvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yMjA1MTIyMS1z/dG9jay1waG90by1m/ZXJyYXJpLWxhZmVy/cmFyaS1oeWJyaWQt/c3VwZXJjYXIuanBn" },
    { name: "Thar", price: 25000, img: "https://imgs.search.brave.com/wesYKqo_Y0TbDGXVtyjvbGnx1vTtHv9Grjmtvf-Hea0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzEzL01haGluZHJh/X1RoYXJfUGhvdG9z/aG9vdF9BdF9QZXJ1/cGFsZW1fQmVhY2hf/KFdlc3RfR29kYXZh/cmlfRGlzdHJpY3Qs/QVAsSW5kaWFfKV9E/amRhdmlkLmpwZw" },
    { name: "BMW", price: 38000, img: "https://imgs.search.brave.com/EXJCI66aawK_geSm8EBkuxzi5ARdbbux1PFd7gRHjG4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZHJpdmVzcGFy/ay5jb20vNjAweDQw/MC9waC1iaWcvMjAy/Mi8wNi8yMDIyLWJt/dy14MS04LmpwZw" },
    { name: "Audi A7", price: 45000, img: "https://imgs.search.brave.com/mEBjIAGytklKCkGoRcK4kdLfstEhssKpfSbH4jYXNXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTgxMzkzOC9waG90/by93aGl0ZS1hdWRp/LWE3LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1JNFhndXBF/Z1BFVl9LUjIzdkdt/TWd5eGN1VTBreDVa/X3hjN01qNm5sekNr/PQ" },
    { name: "Rolls-Royce", price: 65000, img: "https://imgs.search.brave.com/WUfR_hwwwKdvQofjaWYjzGRTfdIiezK5BvUp3XIgF5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGlt/Zy5jYXJkZWtoby5j/b20vaW1hZ2VzL2Nh/cmV4dGVyaW9yaW1h/Z2VzLzYzMHg0MjAv/Um9sbHMtUm95Y2Uv/Um9sbHMtUm95Y2Ut/UGhhbnRvbS83Nzgz/LzE1ODcyMDY3NTg4/ODgvZnJvbnQtbGVm/dC1zaWRlLTQ3Lmpw/Zz9pbXBvbGljeT1y/ZXNpemUmaW13aWR0/aD00ODA" },
    { name: "Porsche", price: 45000, img: "https://i.gaw.to/vehicles/photos/40/25/402523-2021-porsche-911.jpg?1024x640"},
    { name: "Benz", price: 45000, img: "https://images.hindustantimes.com/auto/img/2021/01/13/600x338/Mercedes_AMG_GLC_43_Coupe_1608106610173_1608106620383_1610538999766.jpg"}

];

const carList = document.getElementById('car-list');
const searchBar = document.getElementById('search-bar');
const priceFilter = document.getElementById('price-filter');

function displayCars(carArray) {
    carList.innerHTML = '';
    carArray.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');
        carItem.innerHTML = `
            <img src="${car.img}" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>Price: $${car.price.toLocaleString()}</p>
        `;
        carList.appendChild(carItem);
    });
}

function filterCars() {
    const searchQuery = searchBar.value.toLowerCase();
    const priceRange = priceFilter.value;
    let filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchQuery));

    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filteredCars = filteredCars.filter(car => {
            if (max) {
                return car.price >= min && car.price <= max;
            } else {
                return car.price >= min;
            }
        });
    }

    displayCars(filteredCars);
}

searchBar.addEventListener('input', filterCars);
priceFilter.addEventListener('change', filterCars);

// Initial display of cars
displayCars(cars);
