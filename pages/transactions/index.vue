<script setup lang="ts">
import { transactionCols } from "@/components/Transactions/column";
import { transactions } from "~/components/Transactions/data";
let dfs = transactionCols;
</script>
<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>All Your Transactions</p>
        <h1>Transactions</h1>
      </div>
    </header>
    <SharedDataTable :columns="transactionCols" :data="transactions" />
  </div>
</template>
