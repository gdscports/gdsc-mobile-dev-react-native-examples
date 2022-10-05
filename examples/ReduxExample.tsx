import { Button, StyleSheet, Text, View } from 'react-native';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    decremented: (state) => {
      state.counter = state.counter - 1;
    },
    incremented: (state) => {
      state.counter = state.counter + 1;
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

type CounterState = ReturnType<typeof store.getState>;
type CounterDispatch = typeof store.dispatch;

const useCounterDispatch: () => CounterDispatch = useDispatch;
const useCounterSelector: TypedUseSelectorHook<CounterState> = useSelector;

const { incremented, decremented } = slice.actions;

export function ReduxExample() {
  return (
    <Provider store={store}>
      <ReduxExampleBody />
    </Provider>
  );
}

function ReduxExampleBody() {
  const counter = useCounterSelector((state) => state.counter);
  const dispatch = useCounterDispatch();

  return (
    <View style={styles.container}>
      <Button title='Decrement' onPress={() => dispatch(decremented)} />
      <Text>Current Value: {counter}</Text>
      <Button title='Increment' onPress={() => dispatch(incremented)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
