import './App.css';
import { useEffect, useState } from 'react';
import { Button } from './components/button';
 
export const WeeklyList = () => {
  return (
    <div>yes???</div>
  );
}

export const DailyList = () => {
  return (
    <div>2</div>
  );
}

export const GetData2 = ({nutrition, foods}) => {

  const [selectiveData, setSelectData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("carbs.JSON")
      const dat = await res.json()
      setSelectData(dat)
    }
    fetchData()
  },[])
  

let currentNutrition = []
let currentNutritionAdd = 0
let nutritionSearch = ""
let nutritionSearch2 = ""
let title = nutrition.charAt(0).toUpperCase()+nutrition.substr(1).toLowerCase()
if(nutrition==="sugars") {
  nutritionSearch = "carbohydrates"
  nutritionSearch2 = "sugars"
} else if(nutrition === "fats") {
  nutritionSearch = "fats"
  nutritionSearch2 = "total"
} else if(nutrition === "saturates") {
  nutritionSearch = "fats"
  nutritionSearch2 = "saturates"
} else if (nutrition === "carbohydrates") {
  nutritionSearch = "carbohydrates"
  nutritionSearch2 = "total"
} else {
  nutritionSearch = nutrition
}

for(let a = 0; a<foods.length; a++) {
  for (let i = 0; i<selectiveData.length;i++){
    if((foods[a].type === selectiveData[i].type) && (foods[a].foodName === selectiveData[i].foodName)){
      if(nutritionSearch2 !== ""){
        currentNutrition[a] = selectiveData[i].nutrients[nutritionSearch][nutritionSearch2]
      }else {
        currentNutrition[a] = selectiveData[i].nutrients[nutritionSearch]
      }
      currentNutritionAdd += parseFloat(currentNutrition[a])
    }
  }
}
  
  return (
		<tr>
			<td>{title}</td>
      <td>{currentNutrition[0]}g</td>
      <td>{currentNutrition[1]}g</td>
      <td>{currentNutrition[2]}g</td>
			<td>{currentNutritionAdd.toFixed(1)}g</td>
			<td></td>
		</tr>
	)
}

export const GetNewData = ({food, type}) => {

  const [selectiveData, setSelectData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("carbs.JSON")
      const dat = await res.json()
      setSelectData(dat)
    }
    fetchData()
  },[])

  let carbs = ""
  let protein = ""
  let fibre = ""
  let fats = ""
  let salt = ""
  for (let i = 0; i<selectiveData.length;i++){
    if((selectiveData[i].foodName === food) && (selectiveData[i].type === type)){
      console.log(selectiveData[i])
      carbs = selectiveData[i].nutrients.carbohydrates.total
      protein = selectiveData[i].nutrients.protein
      fibre = selectiveData[i].nutrients.fibre
      fats = selectiveData[i].nutrients.fats.total
      salt = selectiveData[i].nutrients.salt
    }
  }

  return (
    <tr>
      <td></td>
      <td></td>
      
      <th>Bread</th>
      <td>{protein}</td>
      <td>{carbs}g</td>
      <td>{fibre}</td>
      <td>{fats}</td>
      <td>{salt}g</td>
    </tr>
  );
}


function App() {
  //9 calories per gram for fat,4 for carbs
  const foods = [{foodName:"bread", type:"white"}, {foodName:"deli", type:"ham"},{foodName:"cheese", type:"mozzarella"}]
  
  return (
    <div className='main-screen'>
      <div>
      <section className='list-section'>
        <dl>
          <div className='list'>
            <dt><b>Carbs</b></dt>
            <dd>Bread</dd>
            <dd>Pasta</dd>
          </div>
        </dl>
      </section>
        <div className='centre'>
        <section>
          
          <table>
            <thead>
              <tr>
                <th colSpan="6">Monday</th>
              </tr>
              <tr>
                <th colSpan="6">Nutrients</th>
              </tr>
              <tr>
                <th></th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                <th>Total</th>
                <th>Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Bread</td>
                <td>Ham</td>
                <td>Cheese</td>
                <td></td>
                <td></td>
            </tr>
            <GetData2 nutrition="fibre" foods={foods}/>
            <GetData2 nutrition="fats" foods={foods}/>
            <GetData2 nutrition="saturates" foods={foods}/>
            <GetData2 nutrition="carbohydrates" foods={foods}/>
            <GetData2 nutrition="sugars" foods={foods}/>
            <GetData2 nutrition="protein" foods={foods}/>
            <GetData2 nutrition="salt" foods={foods}/>
            </tbody>
          </table>

        </section>
        
        </div>
        <section> 
          <table>
            <thead>
              <tr>
                <th colSpan="8">Monday</th>
              </tr>
              <tr>
                <th>Person</th>
                <th colSpan="2">meal</th>
                <th>meal</th>
                <th colSpan="5">Nutrients</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Protein</th>
                <th>Carbohydrates</th>
                <th>Fibre</th>
                <th>Fats</th>
                <th>Salt</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Person One</td>
                <td>Breakfast</td>
                <td rowSpan="4"><a href="http://bbc.co.uk">Cheese and Ham Toastie</a></td>
                <th></th>
                <td>1</td>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <GetNewData food="bread" type="white"/>
              <GetNewData food="deli" type="ham"/>
              <tr>
                <td>Person One</td>
                <td>Breakfast</td>
                <th>Cheese</th>
                <td>1</td>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
        <Button
        value={"Click Me"}
        buttonFunction={DailyList}/>
         <Button
        value={"Click Me"}
        buttonFunction={WeeklyList}/>
        <WeeklyList/>
      </div>
      
    </div>
  );
}

export default App;
