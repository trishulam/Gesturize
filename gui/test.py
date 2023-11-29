import pyautogui
print(pyautogui.size())
pyautogui.position()

while(True):
    s=int(input("Enter 1 to start and 0 to stop: "))
    if(s==1):
        pyautogui.hotkey('ctrl','up')
    print(pyautogui.position())
    pyautogui.sleep(2)

