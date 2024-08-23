from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import time
import random

# Configuração do ChromeDriver
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--headless')  # Executa o navegador em modo headless (sem interface gráfica)
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Substitua 'C:/Users/edeli/OneDrive/Área de Trabalho/chromedriver-win64/chromedriver.exe' pelo caminho real onde o chromedriver.exe está localizado
service = Service("chromedriver.exe")
browser = webdriver.Chrome(service=service)

# Função para realizar login no LinkedIn e buscar vagas afirmativas para mulheres
def buscar_vagas(browser):
    browser.get("https://www.linkedin.com/login")
    time.sleep(2)

    email_input = browser.find_element(By.NAME, "session_key")
    email_input.send_keys('marina.sfigueiredo39@gmail.com')
    password_input = browser.find_element(By.NAME, "session_password")
    password_input.send_keys("Msf20032003")
    password_input.send_keys(Keys.RETURN)
    time.sleep(5)

    browser.get("https://www.linkedin.com/jobs/search?keywords=vagas%2Bpara%2Bmulheres%2Bna%2B%C3%A1rea%2Bde%2Btecnologia&location=Brasil&geoId=106057199&trk=public_jobs_jobs-search-bar_search-submit&currentJobId=3863620932&position=2&pageNum=0")
    time.sleep(5)  # Aguarda o carregamento da página

    # Adiciona uma espera explícita para garantir que o elemento esteja presente
    wait = WebDriverWait(browser, 10)
    qtd_vagas = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "results-context-header__job-count")))
    print("Quantidade de vagas: " + qtd_vagas.text)

    # Transformar para inteiro
    qtd_vagas_int = int(qtd_vagas.text.replace('.', ''))
    print(f"Quantidade de vagas: {qtd_vagas_int}")

# Inicializar a lista de vagas
lista = [("Desenvolvedora Backend", "Empresa X", "São Paulo"),
         ("Engenheira de Software", "Empresa Y", "Rio de Janeiro"),
         ("Analista de Dados", "Empresa Z", "Belo Horizonte")]

# Buscar vagas no LinkedIn
buscar_vagas(browser)
browser.quit()

