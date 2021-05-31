import axios from 'modules/axios'

document.addEventListener('turbolinks:load', () => {

  // ************************
  // 画像変更
  // ************************
  // inputで値が変更されたときにイベント発火
  const uploader = document.querySelector('.uploader');
  if(uploader){
    uploader.addEventListener('change', () => {
      // inputに設定されたfileの情報取得
      // 1つなので0番目
      const file = uploader.files[0];

      // paramsの定義
      const params = new FormData();
      params.append('avatar', file);

      //作成したインスタンスをもとにリクエスト
      axiosInstance.put(`/avatar`, params)
        .then( res => {
          setImg(res.data.url);
          avatar.setAttribute('src', res.data.url);
          console.log('画像の読み込みに成功');
        })
        .catch( e => {
          alert('保存できませんでした')
          console.log('画像の読み込みに失敗')
        });
    }) 
  }

});