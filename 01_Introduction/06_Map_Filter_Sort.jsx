function DessertList(props) {
    const lowCaloriesDesserts = props.data
      .filter((dessert) => {
        return dessert.calories < 500;
      })
      .sort((a, b) => {
        return a.calories - b.calories;
      })
      .map((dessert) => {
        return (
          <li key={dessert.id}>
            {dessert.title} - {dessert.calories} cal
          </li>
        );
      });
  
    return <ul>{lowCaloriesDesserts}</ul>;
  }
  
  function App() {
    const data = [
      {
        id: '1',
        title: 'Chicken Burst Burger',
        price: 150,
        calories: 450
      },
      {
        id: '2',
        title: 'Chicken Momos',
        price: 100,
        calories: 280
      },
      {
        id: '3',
        title: 'Chicken Kanti',
        price: 250,
        calories: 570
      }
    ];
  
    return (
      <div className="text-2xl m-10">
        <DessertList data={data} />
      </div>
    );
  }
  
  export default App;
  