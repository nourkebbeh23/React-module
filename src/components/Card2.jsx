
import "./Card2.css"
import person1 from "./assets/person_1.jpg"
import person2 from "./assets/person_2.jpg"
import person3 from "./assets/person_3.jpg"
function Cards2(){
    return(
      <div className="cardw">
<div >
    <h1 className="rr">People  <span className="our">Says</span></h1>
</div>

<div className="ccard">
<div className="cccard">
    <img className="n" src={person1} alt="" />
<p>Dolores perferendis ipsam animi <br />
 fuga, dolor pariatur aliquam esse. Modi <br />
  maiores minus velit iste enim sunt iusto dolore</p>

</div>
<div className="cccard1">
    <img className="n" src={person2} alt="" />
<p>Dolores perferendis ipsam animi <br />
 fuga, dolor pariatur aliquam esse. Modi <br />
  maiores minus velit iste enim sunt iusto dolore</p>

</div>
<div className="cccard">
    <img className="n" src={person3} alt="" />
<p>Dolores perferendis ipsam animi <br />
 fuga, dolor pariatur aliquam esse. Modi <br />
  maiores minus velit iste enim sunt iusto dolore</p>

</div>

</div>

      </div>
    );
}
export default Cards2;