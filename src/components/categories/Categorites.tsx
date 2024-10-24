
const categories = [
    { id: 1, name: 'Veggies', img: 'https://img.freepik.com/free-vector/set-different-vegetables-cartoon_1308-104800.jpg' },
    { id: 2, name: 'Fruits', img: 'https://c8.alamy.com/comp/2B5HDXN/cute-cartoon-fruit-doodle-set-orange-and-banana-apple-and-pear-peach-grapes-and-strawberry-isolated-vector-illustration-collection-2B5HDXN.jpg' },
    { id: 3, name: 'Meat', img: 'https://t4.ftcdn.net/jpg/05/92/15/13/360_F_592151377_3nXjkWPdTvTV6L60wMffYtf6jTx052uW.jpg' },
    { id: 4, name: 'Dairy', img: 'https://www.shutterstock.com/shutterstock/photos/510964054/display_1500/stock-vector-dairy-products-milk-food-cartoon-vector-illustration-isolated-on-white-background-510964054.jpg' },
];

function Categories() {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">Categorites</h2>
            <div className="categories flex justify-around mt-4 mb-4">
                {categories.map(category => (
                    <div key={category.id} className="category p-4 bg-white rounded-t-full rounded-b-md shadow-md flex flex-col items-center">
                        <img src={category.img} alt={category.name} className="w-16 h-16 object-cover rounded-full mb-2" />
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
