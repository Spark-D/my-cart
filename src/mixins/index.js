var computedMixin = {
  computed: {
    setComma() {
      return (val) => {
        return Math.floor(val)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    },
  },
};

export { computedMixin };
