<script setup>
import axios from 'axios'

const requestAPI = async () => {
  // 1. 주석을 해제하여 변수를 정의합니다.
  let data = { todo: "윗몸일으키기 12세트", desc: "너무 빠르지 않게..." }
  const url = "/api/todos";

  try {
    // 2. post가 성공할 때까지 기다립니다.
    await axios.post(url, data);
    console.log("등록 성공!");

    // 3. 그다음 조회를 시도합니다. (await으로 통일하는 게 깔끔합니다)
    const res = await axios.get(url);
    console.log("조회 응답", res);

  } catch (e) {
    // 이제 주소가 틀리거나 서버가 꺼져있으면 이쪽이 실행됩니다!
    console.log("오류 발생 확인:", e.message);
  }
};

requestAPI();
</script>