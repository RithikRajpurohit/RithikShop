import React from 'react'



const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 pr-0">
            <img className="object-cover object-center rounded" alt="ecommerce" src="https://pcdn.sharethis.com/wp-content/uploads/2020/06/Blog_eCommerce_060120_WP-2.png" />
          </div>
          <div className="md:w-1/2 md:pl-8 pl-0 mt-8 md:mt-0">
            <h2 className="text-2xl font-medium text-gray-900">Our Journey</h2>
            <p className="leading-relaxed mt-4">
              RithikShop began with a simple mission: to bring the best electronic products to our customers at affordable prices. From our humble beginnings as a small online store, we have grown into a trusted destination for all your tech needs. Our commitment to quality, value, and customer satisfaction has been the driving force behind our success.
            </p>
          </div>
        </div>
        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:order-2 md:pl-8 pl-0">
            <img className="object-cover object-center rounded" alt="ecommerce" src="https://img.freepik.com/premium-vector/website-illustration-vector-design_1181448-111.jpg" />
          </div>
          <div className="md:w-1/2 md:order-1 md:pr-8 pr-0 mt-8 md:mt-0">
            <h2 className="text-2xl font-medium text-gray-900">Our Products</h2>
            <p className="leading-relaxed mt-4">
              At RithikShop, we offer a wide range of products including mobile phones, TVs, headphones, video games, and more. We carefully select each item in our inventory to ensure that it meets our high standards of quality and performance. Whether you are a tech enthusiast or just looking for the best deals, we have something for everyone.
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-8 pr-0">
            <img className="object-cover object-center rounded" alt="ecommerce" src="https://static.vecteezy.com/system/resources/previews/016/998/763/original/character-flat-drawing-beautiful-woman-coming-out-of-laptop-screen-and-pushing-shopping-cart-sale-digital-lifestyle-consumerism-marketing-online-store-concept-cartoon-design-illustration-vector.jpg" />
          </div>
          <div className="md:w-1/2 md:pl-8 pl-0 mt-8 md:mt-0">
            <h2 className="text-2xl font-medium text-gray-900">Our Commitment</h2>
            <p className="leading-relaxed mt-4">
              We are dedicated to providing an exceptional shopping experience from start to finish. Our team is passionate about delivering top-notch customer service, fast shipping, and hassle-free returns. We believe that shopping for electronics should be simple, enjoyable, and most of all, rewarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default AboutUs
