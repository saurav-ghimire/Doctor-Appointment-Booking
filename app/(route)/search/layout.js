import CategoryList from "./_components/CategoryList";

function Layout({children}) {



  return (
    <div className='grid grid-cols-4'>
      <div>
      {/* Category */}
      <CategoryList />
      </div>
      <div className='col-span-3'>
      {/* Children */}
      {children}
      </div>
    </div>
   );
}

export default Layout;