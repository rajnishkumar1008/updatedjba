import Link from "next/link";

function CategoryHome({homecategory}) {
  return (
    <>
      <div className="category-home-wraper">
        {homecategory && homecategory.map((item,i)=>{
     return <div className="pic" key={i}>
       <Link href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}>
      <img src={item.category_image_url} alt="pic" /> 
      </Link>
     </div>
    })}
      
      </div>
    </>
  );
}
export default CategoryHome;
