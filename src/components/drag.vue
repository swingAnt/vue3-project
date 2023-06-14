<template>
    <div class="es-grid-info">
      <div class="es-info-item">
        <span>snapToGrid</span>
        <input type="checkbox" v-model="snapToGrid">
      </div>
      <div class="es-info-item">
        <span>gridX</span>
        <input v-model.number="gridX">
      </div>
      <div class="es-info-item">
        <span>gridY</span>
        <input v-model.number="gridY">
      </div>
      <div class="es-info-item">
        <span>scaleRatio</span>
        <input :value="scale" @change="change">
      </div>
      <div class="es-info-item">
        <div @:click="change" >更新名称</div>

      </div>
    </div>
    <div
      class="es-grid-box"
      :style="gridStyle"
    >
    <Drager

    v-for="item, index in dragList"
    :key="index"
    :left="120"
    :top="index * 120 + 30"
    v-bind="item"
    :style="{ color: item.color }"
    :snapToGrid="snapToGrid"
    :scaleRatio="scale"
    :om="snapToGrid"
    @change="change"
  >
    {{ item.text }}
  </Drager>
    </div>
  </template>
  
  <script setup lang='ts'>
  import { computed, ref } from 'vue'
  import Drager from 'es-drager'
  const snapToGrid = ref(true)
  const gridX = ref(50)
  const gridY = ref(50)
  const scale = ref(1)
  const gridStyle = computed(() => {
    return snapToGrid.value ? {
      '--es-grid-width': gridX.value + 'px',
      '--es-grid-height': gridY.value + 'px',
      transform: `scale(${scale.value})`,
      transformOrigin: 'left top'
    } : {}
  })
  
  const dragList = ref([
  { text: '移动', resizable: false },
  { color: '#00c48f', text: '移动+缩放' },
  { color: '#ff9f00', text: '旋转', rotatable: true, resizable: false },
  { color: '#f44336', text: '旋转+缩放', rotatable: true,
  width:200,
  height:200,
  left:200,
  top:400, }
])

  function handleScaleChange(e: Event) {
    scale.value = +(e.target! as HTMLInputElement).value
  }
  function change(e:any){
    console.log('e',e);
  }
  </script>
  
  <style lang='scss' scoped>
  .es-grid-box {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    background:
          -webkit-linear-gradient(top, transparent calc(var(--es-grid-height) - 1px), #ccc var(--es-grid-height)),
          -webkit-linear-gradient(left, transparent calc(var(--es-grid-width) - 1px), #ccc var(--es-grid-width))
          ;
      background-size: var(--es-grid-width) var(--es-grid-height);
  }
  .es-grid-info {
    display: flex;
  }
  .es-info-item {
    display: flex;
    align-items: center;
    height: 36px;
    margin-right: 20px;
    padding: 24px 12px;
    span {
      margin-right: 6px;
    }
    input {
      flex-grow: 1;
      padding: 0;
      outline: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 8px;
      &:focus {
        border-color: var(--es-doc-color-primary);
      }
    }
  }
  </style>