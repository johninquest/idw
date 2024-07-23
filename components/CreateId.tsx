import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  age: string;
}

const CreateIdForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.label}>Name</Text> */}
      <Controller
        control={control}
        name="name"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value} 
            keyboardType="default" placeholder='Name'
          />
        )}
      />

      {/* <Text style={styles.label}>Age</Text> */}
      <Controller
        control={control}
        name="age"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric" placeholder='Age'
          />
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    marginVertical: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
});

export default CreateIdForm;
