// ESM X NODE 환경에서 변환
// NODE 환경에서는 CommonsJS 방식

// 지금하는 과정은 브라우저에 바로 출력하는게 아니라 (아마도)
// 한번 autoprefixer 기능으로 하위 버전들 호환하는 내용들을
// autoprefixer 해주고 그 내용을 나중에 브라우저에 변환해서
// 올리기 때문에 현재 관점에서 작동되는 환경은 Node 환경이다.

// import autoprefixer from 'autoprefixer'
const autoprefixer = require("autoprefixer");

// export {
//   plugins:[
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [autoprefixer]
};
