

// Write an asynchronous function that accepts a message
//   string and a delay time in milliseconds.
//   The function should log the message to the console after
//   the specified delay time.
async function withDelay(message, delayTime) {
  await new Promise((resolve) => setTimeout(resolve, delayTime));
  console.log(message);
}
withDelay("Delay in timee of the call", 5000);

/*
  You have an array of user IDs and a function getUserData(id) that
  returns a Promise with user data when given a user ID.
  Write an asynchronous function that fetches and logs the
  data for each user ID one by one, in sequence.
*/
 let  userId = [1, 2, 3, 4, 5];
 async function userData(id) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
     const userData = {
       id: id,
       name: `name of user ${id}`,
      email: `user${id}.gmail`,
    };
   resolve(userData);
  }, 3000);
  });
 }
 async function displayData(arrayOfId) {
  for (let i = 0; i < arrayOfId.length; i++) {
    let  data = await getData(arrayOfId[i]);
    console.log(data);
 }
}
displayData(userId);
 /*
//   You have an asynchronous function performTask() that returns a Promise.
//   The Promise resolves if the task is successful and rejects if there's an error.
//   Write a function that calls performTask() and logs a custom success message
// //   if the task is successful, and a custom error message if there's an error.
//  */
  async function performTask(numb) {
    return new Promise((resolve, reject) => {
      if (numb === 2) {
        resolve("Success: Number is equal to 2");
      } else {
        reject("Error: Number is not equal to 2");
      }
    });
  }
  async function runTask() {
   
      await performTask();
      console.log("successful");
    } 
    catch (error) {
      console.log("An error occured: ", error);
    // }
    await performTask(2)
      .then((result) => {
        console.log("Running task successful", result);
      })
      .catch((error) => {
        console.log("An error occured: ", error);
      })
      .finally(() => {
        console.log("I am done running");
      });
  }
  runTask();