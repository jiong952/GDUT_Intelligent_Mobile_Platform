function count(y,m,d){ //����ymdΪ��ֹʱ���������
    var now = Date.now();  //������1970��1��1�յ���ǰʱ��ĺ�����
    //���ش�1970��1��1������ֹ���ڵĺ�����
    var end = new Date(y,m-1,d).getTime();
    var ms = end - now;
    var s = Math.floor(ms/1000);   //floor()����ȡ��
    var sec = Math.floor(s % 60 )  //����
    var min = Math.floor(s / 60 % 60 );  //����
    var hour = Math.floor(s / 60 / 60 % 24);  //Сʱ
    var day = Math.floor(s / 60 / 60 / 24);  //����

    var text1 = "��һ����������"+day+"��"+hour+"ʱ"+min+"��"+sec+"��";
    time.innerHTML = text1;  //��ȡ����
}
count(2022,12,14);  //���ý�ֹ����
//ѭ����ÿ��1��ִ��һ��function
setInterval(function(){count(2022,12,14);},1000);
