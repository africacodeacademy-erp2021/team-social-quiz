export const Shuffle_questions = (array:any) =>{ 
    var number = array.length,
        temp,
        index;
    while(number > 0){    
        index = Math.floor(Math.random() * number);
        number--;    
        temp = array[number];
        array[number] = array[index];
        array[index] = temp;       
    }  
        return array;
}