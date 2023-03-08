사진을 업로드하여 닮은 동물을 찾아주는 웹







<!-- selenium 설치(가상 환경 세팅) > chromeDriver 설치 ( 설치한 exe 파일과 google.py 같은 폴더 안에 있어야 됨)



google.py
#셀레니움을 사용해 이미지 크롤링하기 (대량 다운)

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import os
import time
import urllib.request

nameP = "예리"
os.mkdir(nameP) #폴더 생성

driver = webdriver.Chrome(executable_path="C:/나다/github/animal-image/selenium/chromedriver.exe")
driver.get("https://www.google.co.kr/imghp?hl=ko&ogbl")
elem = driver.find_element(By.NAME, "q") #검색창
elem.send_keys(nameP) #검색
elem.send_keys(Keys.RETURN) #엔터

images = driver.find_elements_by_css_selector(".rg_i.Q4LuWd") # 이미지들 (이미지들 마다 class 이름 동일)
count = 1
for image in images:
    if count < 21:
        image.click()
        time.sleep(3) #클릭하고 어느정도 기다려라 /3초 (로딩하는 시간 기다리기)
        imgUrl = driver.find_element_by_css_selector(".n3VNCb").get_attribute("src") # 이미지 주소 가져오기
        urllib.request.urlretrieve(imgUrl, nameP +"/"+ str(count) + ".jpg")
        count = count + 1



"https://teachablemachine.withgoogle.com/models/zdgBA1Kr2/"
https://teachablemachine.withgoogle.com/models/edGx6xXF3/
https://teachablemachine.withgoogle.com/models/gbhu2b5G4/

남자
https://teachablemachine.withgoogle.com/models/l7So9pdis/


여자
바디2 #fff1f4
바디1 pink

testpage-top-box h1
테두리, 글자 pink

.button
box-shadow pink

.button:hover {
  background-color: pink;
  box-shadow: 0px 15px 20px palevioletred;
  color: #fff;
  transform: translateY(-7px);
}

.remove-image
background: rgb(255, 232, 237);
  border: none;
  padding: 10px;
  border-radius: 45px;
  border-bottom: 4px solid pink;
  transition: all 0.2s ease;

-->
