function applySytle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });

  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    applySytle(element, binding);
  },
  update: (element, binding) => {
    applySytle(element, binding);
  },
};
// export default function (el, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     el.style[position] = binding.value[position];
//   });

//   el.style.position = 'absolute';
// }
