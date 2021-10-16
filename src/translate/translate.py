import translators as ts

def get_translation(input_txt, language_code):    

    result = ts.google(input_txt, 'auto', language_code)
    print(result)
    return result