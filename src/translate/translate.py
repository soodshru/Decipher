import translators as ts

def get_translation(input_txt, from_lang, to_lang):    

    result = ts.google(input_txt, from_lang, to_lang)
    return result