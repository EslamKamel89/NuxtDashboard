<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
const { loading } = useStore();
const open = ref(false);
const createNewProduct = () => {
  open.value = true;
  try {
    loading.value = true;
    pr("create new product");
  } catch (error) {
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <AlertDialog v-model:open="open">
    <AlertDialogTrigger as-child>
      <Button variant="outline"> + Product </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>content </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="createNewProduct">Create</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
