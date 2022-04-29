import React, { useEffect, useState} from "react";
import axios from 'axios';
// import the components we want to use
//import MusicRater from './components/MusicRater'
//import InitialScreen from './components/InitialScreen'
import {Button, FlatList, Text, View, TextInput} from "react-native";
import { styles } from "./styles";


export default function App() {
  // Initially, set isLoading to true and set up the setLoading function for
  // later changing the isLoading value.
  const [isLoading, setLoading] = useState(true);
  // Initially, set data to an empty array and set up the setData function for
  // later changing the data value to the fetched data.
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState("");
  const [song, setSong] = useState("");
  const [songId, setSongId] = useState(null);
  const [ratingsDict, setRatingsDict] = useState({});

  const refreshRatings = () => {
	fetch("https://simplymusic.herokuapp.com/rating")
	.then((response) => response.json())
	.then((json) => setData(json))
	.catch((error) => console.error(error))
	//.finally(() => setLoading(false));
  };

  const onRemove2 = item => e => {
	// Pass the URL to the delete API.
    axios.delete(`https://simplymusic.herokuapp.com/rating/${item.id}/`)
      .then((response) => refreshRatings())
  };

  const Update = (item) => e => {
	console.log("item is:", item);
    axios.patch(`https://simplymusic.herokuapp.com/rating/${item.id}/`, item)
    .then((response) => refreshRatings())
  };

  const Update2 = (item) => e => {
	let r = ratingsDict['rating'];
	// let i = id['id']
	// let new_rat = {i, username, song, r} 
	console.log("new rating: ", ratingsDict['rating']);
	// console.log("id: ", id['id']);
	// console.log("r", r)
	// console.log("new rating", new_rat)
	let the_id = item.id
	let usn = item.username
	let sg = item.song
	console.log(item)
	//console.log(item.id)
	//console.log(item.username)
	//console.log(item.song)
	item['rating'] = r;
	console.log(item)

	//let new_rating = {the_id, usn, sg, r}

    axios.patch(`https://simplymusic.herokuapp.com/rating/${item.id}/`, item)
    .then((response) => refreshRatings())
  };

  const onSubmit = (event) => {
	event.preventDefault();
	let r = {username, song, rating}
	console.log("item is:", r);
	axios.post('https://simplymusic.herokuapp.com/rating/', r).then((response) => refreshRatings());
  };


  // The useEffect hook is similar to the componentDidMount and
  useEffect(() => {
    fetch("https://simplymusic.herokuapp.com/rating")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);

  return (
    // Now the component parses the data and renders it using a FlatList component.
    <View style={{ flex: 1, padding: 24 }}>
      {/* As long as isLoading is true, show "Loading ..." */}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        // Once it is false, show the fetched data.
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}
          >
            MusicRater Ratings
          </Text>
          <FlatList
            data={data}
			keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
				<View>
					<Text>{"User: " + item.username + "  -  Rating: " + item.rating + "  -  Song: " + item.song}</Text>
					{/* style={styles.button} */}
					<Button 
					title='Delete' 
					onPress={onRemove2(item)}
					/>
					<TextInput
					style={styles.input}
					placeholder={'Enter New Rating 1-5'}
					//value={item.rating}
					//onChange= {(e) => setRating(e.target.value)}
					value = {ratingsDict[item.id]}
					//onChangeText={(e) =>{setRatingsDict({rating: value})}}
					onChangeText={(value) => setRatingsDict({rating: value})}
					// value = {ratingsDict[item.id]}
                    // onChange= {(e) =>{var id = item.id; setRatingsDict({ rating: e.target.value})}}
					/>
					<Button 
					title='Update' 
					onPress={Update2(item)}
					// onPress={Update({value})}
					/>
					
				</View>
            )}
          />
		  

		  {/* This is the view for adding a rating to the DB */}
		  <View>
		  	<TextInput
				style={styles.input}
				placeholder={'Username'}
				value={username}
				onChangeText={(value) => setUsername(value)}
				//onChange= {(e) => setUsername(e.target.value)}
				/>
			
			<TextInput
				style={styles.input}
				placeholder={'Song'}
				value={song}
				//onChange= {(e) => setSong(e.target.value)}
				onChangeText={(value) => setSong(value)}
				/>

			<TextInput
				style={styles.input}
				placeholder={'Rating'}
				value={rating}
				//onChange= {(e) => setRating(e.target.value)}
				onChangeText={(value) => setRating(value)}
				
				/>
      <Text style={styles.instructions}>
        Please only rank every song once (per user). Enter a ranking between 1 and 5. 
      </Text>  
			<Button 
				title='Add Rating 1-5' 
				onPress={onSubmit}
			/>

		  </View>


        </View>



      )}
    </View>
  );
}
