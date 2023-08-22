import subprocess
import requests
import os

def execute_command(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return process.returncode, stdout.decode('utf-8'), stderr.decode('utf-8')

def check_deployment():
    # GitHub Pages 的 URL，根据你的配置进行修改
    url = 'https://xiryg.github.io/'

    # 发送 GET 请求检查网站是否正常运行
    response = requests.get(url)

    # 检查返回的状态码是否为 200，表示网站正常
    if response.status_code == 200:
        return True
    else:
        return False

def main():
    # 获取当前脚本文件的路径
    current_directory = os.path.dirname(os.path.abspath(__file__))

    # 设置博客目录为绝对路径
    blog_directory = r'd:\Xiryg_Blog_github\myblog-or'

    commands = [
        ['hexo', 'clean'],
        ['hexo', 'douban'],
        ['hexo', 'generate'],
        ['gulp', 'zip'],
        ['hexo', 'deploy']
    ]

    for command in commands:
        returncode, stdout, stderr = execute_command(command)
        if returncode != 0:
            print(f'Error executing command: {command}')
            print(stderr)
            break
        else:
            print(f'Success executing command: {command}')
            print(stdout)

    if check_deployment():
        print('Deployment successful')
    else:
        print('Deployment failed')

    # 源码提交仓库代码
    # 执行 git 命令
    
    returncode, stdout, stderr = execute_command('git add --all')
    if returncode != 0:
        print('Error executing command: git add --all')
        print(stderr)
    else:
        print('Success executing command: git add --all')
        print(stdout)

    returncode, stdout, stderr = execute_command('git commit -m "update"')
    if returncode != 0:
        print('Error executing command: git commit -m "update"')
        print(stderr)
    else:
        print('Success executing command: git commit -m "update"')
        print(stdout)
    returncode, stdout, stderr = execute_command('git pull origin main')
    if returncode != 0:
        print('Error executing command: git pull origin main')
        print(stderr)
    else:
        print('Success executing command: git pull origin main')
        print(stdout)

    returncode, stdout, stderr = execute_command('git push origin main')
    if returncode != 0:
        print('Error executing command: git push origin main')
        print(stderr)
    else:
        print('Success executing command: git push origin main')
        print(stdout)    
    

if __name__ == '__main__':
    main()
