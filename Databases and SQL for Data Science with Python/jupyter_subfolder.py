# change the startup folder of the jupyter notebook

import os

#path = input("please enter the folder name where you start the jupyter!")

#folder =path.replace("\\", "/")
#f = "${folder}"
#string = 'cmd /k "jupyter notebook--notebook-dir=%s"'%folder
#print(string)
#os.system('cmd /k "jupyter notebook--notebook-dir=%s"'%folder)
#os.system(string)
#s = 'cmd /k "jupyter notebook--notebook-dir="{}"'.format(folder)
#os.system('cmd /k "jupyter notebook--notebook-dir="{}"'.format(folder))
os.system('cmd /k jupyter notebook--notebook_dir="C:/Users/Sidik Savutjan/Desktop"')