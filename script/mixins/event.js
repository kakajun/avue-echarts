// import { initVal } from 'core/dataformat';
function bindEvent(safe, name, event) {
  typeof safe[name] === 'function' && safe[name]({ value: safe.value, column: safe.column })
  safe.$emit(name, safe.value, event)
}
import { validatenull } from '@s/utils/validate.js'
export default function () {
  return {
    methods: {
      // initVal() {
      //   this.text = initVal(this.value, this.column, (result) => {
      //     this.stringMode = result;
      //   });
      // },
      getLabelText(item) {
        if (validatenull(item)) return ''
        if (typeof this.typeformat === 'function') {
          return this.typeformat(item, this.labelKey, this.valueKey);
        }
        return item[this.labelKey]
      },
      handleFocus(event) {
        bindEvent(this, 'focus', event)
      },
      handleBlur(event) {
        bindEvent(this, 'blur', event)
      },
      handleClick(event) {
        bindEvent(this, 'click', event)
      },
      handleChange(value) {
        let result = value;
        if (this.isString || this.isNumber || this.stringMode || this.listType === "picture-img") {
          if (Array.isArray(value)) result = value.join(',')
        }
        if (typeof this.change === 'function' && this.column.cell !== true) {
          this.change({ value: result, column: this.column });
        }
        this.$emit('input', result);
        this.$emit('change', result);
      }
    }
  };
}
