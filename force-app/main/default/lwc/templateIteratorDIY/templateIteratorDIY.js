import { LightningElement } from 'lwc';

export default class TemplateIteratorDIY extends LightningElement {
    topicConcepts = [
        {   
            topicId : 1 ,
            Topics : "Reactivity",
            Concepts : ['@track']
        },
        {   
            topicId : 2 ,
            Topics : "Parent-Child Communication",
            Concepts : ["@api"]
        },
        {   
            topicId : 3 ,
            Topics : "Child-Parent Communication",
            Concepts : ["custom dispatchEvent"]
        },
        {   
            topicId : 4 ,
            Topics : "Lifecycle Hooks",
            Concepts : ['Concstructor', 'connectedCallbacks','renderedCallBack render', 'disconnected Callback', 'errorCallBack']
        },
        {   
            topicId : 5 ,
            Topics : "Lightning Data Service",
            Concepts : ["@Wire"]
        }
    ]
}