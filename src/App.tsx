import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
} from 'react-native';
import styles from './AppStyle';
import Task from './components/toDoCard/taskCard';

const App = () => {
  const [task, setTask] = useState('');
  const [myData, setMydata] = useState([]);
  const [isDoneCount, setIsDoneCount] = useState(0);

  const handleAddTask = () => {
    if (task.trim() === '') {
      // Eğer girilen görev boş ise
      Alert.alert('Uyarı', 'Lütfen yapılacak bir görev girin'); // Kullanıcıya uyarı verilir
      return;
    }

    const newTaskData = [...myData, {isDone: false, text: task}]; // Yeni bir görev nesnesi oluşturulur ve mevcut veri listesine eklenir
    setMydata(newTaskData); // Veriler güncellenir
    setTask(''); // Görev girdi alanı temizlenir
    const count = newTaskData.filter(item => item.isDone === false).length; // Tamamlanmamış görev sayısı hesaplanır
    setIsDoneCount(count); // Tamamlanmamış görev sayısı durumu güncellenir
    Keyboard.dismiss(); // Klavye gizlenir
  };
  const handleDelete = index => {
    const newTaskData = myData.filter((item, idx) => idx !== index); // silinecek öğenin indeksine göre yeni bir liste oluşturulur
    setMydata(newTaskData); // myData state'ine yeni oluşturulan liste atanır
    const count = newTaskData.filter(item => item.isDone === false).length; // tamamlanmamış görevlerin sayısının güncellenmesi için yeni listenin filtrelenmesi
    setIsDoneCount(count); // setIsDoneCount hook'u kullanılarak tamamlanmamış görev sayısı güncellenir
  };

  const isDone = item => {
    const index = item.index; // tamamlanan görevin indeksi alınır
    const newTaskData = [...myData]; // myData'nın kopyası oluşturulur
    const isCompleted = newTaskData[index]; // tamamlanmış görevin durumu ters çevrilir
    isCompleted.isDone = !isCompleted.isDone;
    setMydata(newTaskData); // myData state'ine yeni oluşturulan liste atanır
    const count = newTaskData.filter(item => item.isDone === false).length; // tamamlanmamış görevlerin sayısının güncellenmesi için yeni listenin filtrelenmesi
    setIsDoneCount(count); // setIsDoneCount hook'u kullanılarak tamamlanmamış görev sayısı güncellenir
  };
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Text style={styles.header}>Yapılacaklar</Text>
        <Text style={styles.count}>{isDoneCount}</Text>
      </View>
      <View style={styles.flat}>
        <FlatList
          data={myData}
          renderItem={({item, index}) => (
            <Task
              index={index}
              text={item.text}
              deleteTask={() => handleDelete(index)}
              isDone={() => isDone({index})}
            />
          )}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapılacak"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default App;
