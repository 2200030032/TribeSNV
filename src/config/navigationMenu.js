export const navigation = {
    categories: [
      {
        id: 'organics',
        name: 'Organics',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'products',
            name: 'Products',
            items: [
              { name: 'Forest Specials', id:"forestspecials", href: `{orgainc/products/forestspecials}` },
              { name: 'Beauty Care', id:"beautycare", href: '{prgains/products/beautycare}' }
              // { name: 'Women Jeans', id: 'women_jeans' },
              // { name: 'Lengha Choli', id: 'lengha_choli' },
              // { name: 'Sweaters', id: 'sweater' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: 'jacket' },
              // { name: 'Gouns', id: 'gouns' },
              // { name: 'Sarees', id: 'saree' },
              // { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              // { name: 'Watches', id: 'watch' },
              // { name: 'Wallets', id: 'wallet' },
              // { name: 'Bags', id: 'bag' },
              // { name: 'Sunglasses', id: 'sunglasse' },
              // { name: 'Hats', id: 'hat' },
              // { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              // { name: 'Full Nelson', id: '#' },
              // { name: 'My Way', id: '#' },
              // { name: 'Re-Arranged', id: '#' },
              // { name: 'Counterfeit', id: '#' },
              // { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'frabics',
        name: 'Frabics',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens', id: 'men' },
              { name: 'Women', id: 'women' }
              // { name: 'Men Jeans', id: 'men_jeans' },
              // { name: 'Sweaters', id: '#' },
              // { name: 'T-Shirts', id: 't-shirts' },
              // { name: 'Jackets', id: '#' },
              // { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              // { name: 'Watches', id: '#' },
              // { name: 'Wallets', id: '#' },
              // { name: 'Bags', id: '#' },
              // { name: 'Sunglasses', id: '#' },
              // { name: 'Hats', id: '#' },
              // { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              // { name: 'Re-Arranged', id: '#' },
              // { name: 'Counterfeit', id: '#' },
              // { name: 'Full Nelson', id: '#' },
              // { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'painting',
        name: 'Painting',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'art',
            name: 'Art',
            items: [
              { name: 'Hand Painting', id:"handpainting", href: `{painting/art/painting}` },
              { name: 'Glass Painting', id:"glasspainting", href: '{painting/art/glasspainting}' }
              // { name: 'Women Jeans', id: 'women_jeans' },
              // { name: 'Lengha Choli', id: 'lengha_choli' },
              // { name: 'Sweaters', id: 'sweater' },
              // { name: 'T-Shirts', id: 't-shirt' },
              // { name: 'Jackets', id: 'jacket' },
              // { name: 'Gouns', id: 'gouns' },
              // { name: 'Sarees', id: 'saree' },
              // { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              // { name: 'Watches', id: 'watch' },
              // { name: 'Wallets', id: 'wallet' },
              // { name: 'Bags', id: 'bag' },
              // { name: 'Sunglasses', id: 'sunglasse' },
              // { name: 'Hats', id: 'hat' },
              // { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              // { name: 'Full Nelson', id: '#' },
              // { name: 'My Way', id: '#' },
              // { name: 'Re-Arranged', id: '#' },
              // { name: 'Counterfeit', id: '#' },
              // { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      }
    ],
    pages: [
      { name: 'About Us', id: 'about-us', href: '/about' },
      { name: 'Contact Us', id: 'contact-us', href: '/contact' },
    ],

  }