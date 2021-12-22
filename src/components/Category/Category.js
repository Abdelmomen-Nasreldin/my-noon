import { useParams } from "react-router-dom";
import NewCategorySlider from "../NewCategorySlider";
import { Link } from "react-router-dom";
function Category() {
  let { selectedCat } = useParams();
  console.log("ff", selectedCat);

  var selected_category = selectedCat; //Mobiles Electronics
  return (
    <div className="container-fluid">
      <div className="row">
        <Link to={`/search?category=${selected_category}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/1.png`}
            alt="Alt_Text"
            width="100%"
            height="100%"
          />
        </Link>
      </div>

      <div className="row mt-5 ">
        <NewCategorySlider catName={selectedCat} />
        {/* <h1>Rmadan block</h1> */}
      </div>

      <div className="mt-5">
        <div>
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/2.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
      </div>

      <div className="row  mt-5">
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/3.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/4.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/5.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/6.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/7.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/8.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/9.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/10.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/11.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/12.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/13.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
        <div className="col">
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/14.png`}
              alt="Alt_Text"
              width="100%"
              height="100%"
            />
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="row mt-5 ">
          {/* <NewCategorySlider catName={selectedCat} /> */}
          {/* <h1>Rmadan block</h1> */}
        </div>
        {/* <h1>Rmadan block</h1> */}
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/15.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/16.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/17.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/18.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/19.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/20.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/21.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="row">
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/22.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/23.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/24.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/25.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/26.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
          <div className="col">
            <a href="/#">
              <img
                src={`${process.env.PUBLIC_URL}/assets/zaytoun/Categories/${selected_category}/27.png`}
                alt="Alt_Text"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
