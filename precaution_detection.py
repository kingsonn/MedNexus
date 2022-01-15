import pandas as pd

class Precaution():
    def __init__(self, disease):
        self.disease = disease

    def display(self):
        
        df = pd.read_csv('dataset/symptom_precaution.csv')
        idx = df[df['Disease'] == f'{self.disease}'].index[0]
        precautions = list(df.iloc[idx])[1:]    
        
        return(precautions)

if __name__ == "__main__":
    dis = Precaution('Migraine')
    print(dis.display())
