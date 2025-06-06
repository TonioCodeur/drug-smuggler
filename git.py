import subprocess
from datetime import datetime


def git_commit_push():
    # Récupérer la date du jour
    date_aujourdhui = datetime.now().strftime("%d/%m/%Y")
    
    # Préparer le message de commit
    message_commit = f"commit du {date_aujourdhui}"
    
    try:
        # Exécuter git add .
        subprocess.run(['git', 'add', '.'], check=True)
        print("git add . exécuté avec succès")
        
        # Exécuter git commit
        subprocess.run(['git', 'commit', '-m', message_commit], check=True)
        print(f"Commit créé avec le message: {message_commit}")
        
        # Exécuter git push
        subprocess.run(['git', 'push'], check=True)
        print("Push effectué avec succès")
        
    except subprocess.CalledProcessError as e:
        print(f"Une erreur s'est produite: {e}")

if __name__ == "__main__":
    git_commit_push()

