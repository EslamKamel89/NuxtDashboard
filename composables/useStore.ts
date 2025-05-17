export default function useStore() {
  const loading = ref(false);
  const setLoading = (newValue: boolean) => {
    loading.value = newValue;
  };
  return {
    loading,
  };
}
