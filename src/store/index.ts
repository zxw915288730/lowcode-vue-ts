import { createStore } from "vuex";
import user, { UserProps } from './user'
import templates,{TemplatesProps} from './templates'
import editor, { EditorProps } from './editor'

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorProps;
  // global: GlobalStatus;
}
export interface ActionPayload {
  urlParams?: { [key: string]: any };
  data?: any;
  searchParams?: { [key: string]: any };
}

const store = createStore({
  modules:{
    user,
    templates,
    editor
  }
})



export default store