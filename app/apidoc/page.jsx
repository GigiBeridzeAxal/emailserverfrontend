import React from 'react'
import Header from '../components/Header'

export default function page() {
  return (
    <>
    <Header></Header>

    <div className="apidoc">
      <div className="apidocframe">

      


        <div className="howtomakeserver">
          <div className="servermaketittle">
            ჩვენი სერვერები მუშაობს 24/7-ზე თქვენ შეგიძლიათ გამოიყენოთ ჩვენი სერვერები თქვენი პროექტებისთვის
            სერვერის შესაქმნელად გჭირდებათ მინიმუმ 500 კრედიტი ჩვენ გთავაზობთ 3 სერვერის ტიპს თავისი ბენეფიტებით

          </div>
          <div className="servermakeurl">http://localhost:3000/myserver</div>
          <div className="servermaketittle">
                პირველ რიგში უნდა შევქმნათ ახალი სერვერი 
          </div>
          <img src="plans.PNG" alt="" />
          <div className="servermaketittle">
              შემდეგ დამატებულ სერვერს დავაკლიკებთ და გავხსნით მენიუს
          </div>
          <img src="myservers.PNG" alt="" />
          <div className="servermaketittle">
             Api Key-სა და Api Password-ისთვის შევდივართ სერვერის მენიუში და ვპოულობთ მათ
          </div>
          <img src="apikeys.PNG" alt="" />
          <div className="servermaketittle">
             მარტივი სტრუქტურა React-ის ფრეიმვორკზე
          </div>
          <img src="form.PNG" alt="" />
          <br /><br />
          <div className="servermaketittle">
             Api-ს გაგზავნა სერვერზე
          </div>
     
          <img src="form2.PNG" alt="" />
          <br />
        </div>




      </div>
    </div>
    </>
  )
}
