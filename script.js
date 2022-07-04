const Products = [
  {
    id: 1,
    name: 'Xiaomi Mi Band 5',
    amount: 199.0,
    src: 'assets/images/products/product-1.jpg',
  },
  {
    id: 2,
    name: 'Big Power Sound Speaker',
    amount: 275.0,
    src: 'assets/images/products/product-2.jpg',
  },
  {
    id: 3,
    name: 'WiFi Security Camera',
    amount: 399.0,
    src: 'assets/images/products/product-3.jpg',
  },
  {
    id: 4,
    name: 'iphone 6x plus',
    amount: 400.0,
    src: 'assets/images/products/product-4.jpg',
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    amount: 350.0,
    src: 'assets/images/products/product-5.jpg',
  },
  {
    id: 6,
    name: 'Mini Bluetooth Speaker',
    amount: 70,
    src: 'assets/images/products/product-6.jpg',
  },
  {
    id: 7,
    name: 'PX7 Wireless Headphones',
    amount: 100.0,
    src: 'assets/images/products/product-7.jpg',
  },
  {
    id: 8,
    name: 'Apple MacBook Air',
    amount: 899.0,
    src: 'assets/images/products/product-8.jpg',
  },
];

const Categories = [
  'Akıllı Saat',
  'Tablet',
  'VR',
  'AirPods',
  'Akıllı Telefon',
  'Laptop',
  'Drone',
];

window.addEventListener('DOMContentLoaded', function () {
  ShowCategories(Categories);
  ShowCategoriesFullpage(Categories);
});

const ShowCategories = (Categories) => {
  const CategoryList = document.querySelector('#nav');
  let CategoryListItem = Categories.map((category) => {
    return `
    <li class="nav-item">
      <a class="active" aria-label="Toggle navigation">${category}</a>
    </li>
    `;
  });
  CategoryListItem = CategoryListItem.join('');
  CategoryList.innerHTML = CategoryListItem;
};

const ShowCategoriesFullpage = () => {
  const CategoryList = document.querySelector('.sub-category');
  let CategoryListItem = Categories.map((category) => {
    return `
    <li><a href="product-grids.html">${category}</a></li>
    `;
  });
  CategoryListItem = CategoryListItem.join('');
  CategoryList.innerHTML = CategoryListItem;
};

const AddtoCart = (id) => {
  CreateItem(id);
};

const CreateItem = (id) => {
  const ul = document.querySelector('.shopping-list');
  const li = document.createElement('li');
  li.setAttribute('id', id);
  li.setAttribute('class', 'BasketProducts');
  const ProductDetail = Products.map((product) => {
    if (id == product.id) {
      TotalAmount(product.amount);
      return `
      <a class="remove" title="Remove this item" onclick="RemoveFromBasket(${id} , ${product.amount})"> 
      <i class="lni lni-close"></i>
      </a>
      <div class="cart-img-head">
          <a class="cart-img" href="product-details.html">
          <img src="${product.src}" alt="#"></a>
      </div>
      <div class="content">
        <h4><a href="product-details.html">
          ${product.name}</a></h4>
        <p class="quantity">1x - <span class="amount">$${product.amount}</span></p>
      </div>`;
    }
  });
  li.innerHTML = ProductDetail;
  ul.appendChild(li);
  TotalItems();
};

const RemoveFromBasket = (id, decreaseAmount) => {
  const BasketProduct = document.getElementsByClassName('BasketProducts');
  BasketProduct.namedItem(id).remove();
  TotalItems();
  TotalAmount(-decreaseAmount);
};

const TotalItems = () => {
  const count = document.querySelector('#count');
  const BasketProduct = document.getElementsByClassName('BasketProducts');
  count.innerText = BasketProduct.length;
};

let Amount = 0;

const TotalAmount = (amount) => {
  const TotalAmount = document.querySelector('.total-amount');
  console.log(amount);
  Amount += amount;
  TotalAmount.innerText = '$' + Amount + '.0';
};
