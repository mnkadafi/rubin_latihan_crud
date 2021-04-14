<?php
defined('BASEPATH') OR exit ('No Direct Script Allowed');

class M_siswa extends CI_Model {
    public function getAll() {
        return $this->db->get('tb_siswa')->result();
    }

    public function save($data) {
        return $this->db->insert('tb_siswa', $data);
    }

    public function getById($kd_siswa) {
        $this->db->select("*");
        $this->db->from('tb_siswa');
        $this->db->where(array("kd_siswa" => $kd_siswa));

        return $this->db->get()->row();
    }

    public function update($data, $id) {
        return $this->db->update('tb_siswa', $data, array("kd_siswa" => $id));
    }    

    public function delete($id) {
        return $this->db->delete('tb_siswa', array("kd_siswa" => $id));
    }
}

?>