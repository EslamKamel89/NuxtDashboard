<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const props = defineProps<{
  title?: string;
  description?: string;
  okLabel?: string;
  cancelLabel?: string;
}>();
const emit = defineEmits<{
  ok: [];
  cancel: [];
}>();
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      <slot />
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{
          title ?? "Are you absolutely sure?"
        }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ description ?? "This action cannot be undone." }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="emit('cancel')">{{
          cancelLabel ?? "Cancel"
        }}</AlertDialogCancel>
        <AlertDialogAction @click="emit('ok')">{{
          okLabel ?? "Continue"
        }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
