import "./Form.css"


function Form(){
    return(
<div className="background">

<div className="face">
<form className="form" action="">
    <div className="first">

<div>
<input  className="bn" type="text" placeholder="First Name" />

<input  className="bn" type="text" placeholder="Last Name" />


</div>

    </div>
    <div className="first">

<div>
<input  className="bn" type="email" placeholder="Email" />

<input  className="bo" type="date" placeholder="Date" />


</div>

    </div>
    <div>
   <div className="firstt">
   <select className="bnn" >
   <option value="">Dental exam and teeth cleaning</option>
   <option value="">Dental emergency</option>
   <option value="">Dental implants</option>
                </select>
   </div>

   <div className="firsttt">
   <div className="bnn" >
<textarea placeholder="Nots" name="" id="" rows="10" cols="40"></textarea>
                </div>
   </div>
<button className="btnn">Send</button>
    </div>
</form>

</div>

<div className="face">
<div className="pa">
<h2>Online Appointment Request Form</h2>
<p>Lorem ipsum dolor, sit amet consectetur <br />
adipisicing elit. Reprehenderit dicta natus <br />
 similique sunt harum itaque distinctio sit dolore  <br />
 minus ipsam quae tempora, porro inventore adipisci <br />
  saepe sequi laudantium in nihil?</p>
  <p>Lorem ipsum dolor, sit amet consectetur <br />
adipisicing elit. Reprehenderit dicta natus <br />
 similique sunt harum itaque distinctio sit dolore  <br />
 minus ipsam quae tempora, porro inventore adipisci <br />
  saepe sequi laudantium in nihil?</p>
  <p>Lorem ipsum dolor, sit amet consectetur <br />
adipisicing elit. Reprehenderit dicta natus <br />
 similique sunt harum itaque distinctio sit dolore  <br />
 minus ipsam quae tempora, porro inventore adipisci <br />
  saepe sequi laudantium in nihil?</p>
</div>
</div >























</div>




    )
}
export default Form;